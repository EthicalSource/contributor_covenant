const initializeBuilder = async (languageCode, version, reportingPlaceholder, enforcementPlaceholder) => {
  const versionPath = version.replace(".", "/")
  const sourceUrl =  window.location.href.replace("adopt/",`${languageCode.replace("en","")}/version/${versionPath}/code_of_conduct/code_of_conduct.md`)
  const content = await readTemplate(sourceUrl)

  const template = document.getElementById('template')
  const preview = document.getElementById('preview')
  const buffer = document.getElementById('buffer')
  if (!template || !preview || !buffer) { return }

  // Immutable cache
  template.innerHTML = content
  buffer.innerHTML = content
  preview.innerHTML = marked.parse(content)

  const languageCodeElems = Array.from(document.getElementsByClassName('language'))
  languageCodeElems.forEach((elem) => {
    if ((languageCode) && (elem.id == languageCode)) {
      elem.classList.add("highlight")
    } else {
      elem.classList.remove("highlight")
    }
  });

  initializeReportingField(reportingPlaceholder)
  initializeEnforcementField(enforcementPlaceholder)

}

const initializeReportingField = (placeholder) => {
  const reportingField = document.getElementById('reporting')
  const template = document.getElementById('template')
  if (!reportingField || !template) { return }

  const escaped = placeholder.replace(/[.*+\?^${}()|[\]\\]/g, '\\$&')
  const regex = new RegExp(`${escaped}`, 'mi')

  const content = template.innerHTML
  const match = content.match(regex)
  reportingField.value = match
  reportingField.dataset.placeholder = placeholder

  reportingField.addEventListener("focus", (event) => {
    updatePreview('reporting')
  });
  reportingField.addEventListener("blur", (event) => {
    updatePreview('reporting')
  });
  reportingField.addEventListener("keyup", (event) => {
    updatePreview('reporting')
  });
}

const initializeEnforcementField = (placeholder) => {
  const enforcementField = document.getElementById('enforcement')
  const template = document.getElementById('template')
  if (!enforcementField || !template) { return }

  const escaped = placeholder.replace(/[.*+\?^${}()|[\]\\]/g, '\\$&')
  const regex = new RegExp(`${escaped}`, 'mi')

  const content = template.innerHTML
  const match = content.match(regex)
  enforcementField.value = match
  enforcementField.dataset.placeholder = placeholder

  enforcementField.addEventListener("focus", (event) => {
    updatePreview('enforcement')
  });
  enforcementField.addEventListener("blur", (event) => {
    updatePreview('enforcement')
  });
  enforcementField.addEventListener("keyup", (event) => {
    updatePreview('enforcement')
  });
}

const updatePreview = (elemId) => {
  const template = document.getElementById('template')
  const preview = document.getElementById('preview')
  const buffer = document.getElementById('buffer')
  const field = document.getElementById(elemId)
  if (!template || !preview || !buffer || !field) { return }

  const defaultText = template.innerHTML
  const matches = []
  let scrollToText = ""

  const customFields = document.getElementsByClassName('builder')
  const fieldsArray = Array.from(customFields)
  fieldsArray.forEach((field) => {
    const placeholder = field.dataset.placeholder
    const escaped = placeholder.replace(/[.*+\?^${}()|[\]\\]/g, '\\$&')
    const regex = new RegExp(`${escaped}`, 'mi')

    const match = defaultText.match(regex)
    if ((match) && (match != "")) {
      const replacement = field.value
      const matchJSON = { match: match[0], replacement: replacement }
      matches.push(matchJSON)
      if (field.id == elemId) { scrollToText = replacement }
    } else {
      field.value = "This feature is not supported by this version of Contributor Covenant. Please proceed to the next step."
    }
  });

  let scratch = defaultText
  matches.forEach((match) => { scratch = scratch.replace(match.match, match.replacement) });
  const sanitized = scratch.replace('\n\n\n', '\n\n').replace("__","")
  preview.innerHTML = marked.parse(sanitized)
  buffer.innerHTML = sanitized
  scrollPreview(scrollToText)

  return preview
}

const clearHighlights = () => {
  const preview = document.getElementById('preview')
  const content = preview.innerHTML
  const clean = content.replace(/<\/?span[^>]*>/gi, '');
  preview.innerHTML = marked.parse(clean)
}

const scrollPreview = (text) => {
  const container = document.getElementById('preview')
  if (!container) { return }

  const treeWalker = document.createTreeWalker(
    container,
    NodeFilter.SHOW_TEXT,
    {
      acceptNode: (node) => {
        return node.nodeValue.includes(text)
          ? NodeFilter.FILTER_ACCEPT
          : NodeFilter.FILTER_REJECT;
      }
    },
    false
  );

  const textNode = treeWalker.nextNode()
  if (textNode) {
    const index = textNode.nodeValue.indexOf(text)
    if (index === -1) return;

    const range = document.createRange()
    range.setStart(textNode, index)
    range.setEnd(textNode, index + text.length)
    const rect = range.getBoundingClientRect()
    const containerRect = container.getBoundingClientRect()
    const offsetTop = rect.top - containerRect.top + container.scrollTop
    container.scrollTo({
      top: offsetTop,
      behavior: 'smooth'
    });
    if (text.length == 0) { return }
    const span = document.createElement('span')
    span.classList.add('highlight')
    range.surroundContents(span)
  }

}

const scrollPreviewToTop = () => {
  const preview = document.getElementById('preview')
  if (!preview) { return }
  preview.scrollTo({ top: 0, behavior: 'smooth'});
}

const revealStep = (elemId) => {
  const steps = document.querySelectorAll('.step')
  const elem = document.getElementById(elemId)
  if (!elem) { return }

  steps.forEach((step, i) => {
    step.classList.add('hidden')
  });
  elem.classList.remove('hidden')
  clearHighlights()
}

const revealPreview = () => {
  preview = document.getElementById('preview')
  if (!preview) { return }
  preview.classList.remove('hidden')
}

const copyBufferToClipboard = () => {
  const buffer = document.getElementById('buffer')
  if (!buffer) { return }

  const completedText = buffer.innerHTML
  const cleanText = completedText.replace(/<\/?span[^>]*>/gi, '');
  navigator.clipboard.writeText(cleanText).then(
    function () { showModal("Copied!")},
    function (err) { console.error('Could not copy text: ', err) }
  )
}

const showModal = (message) => {
  const modal = document.getElementById('modal')
  if (!modal) { return }
  modal.textContent = 'Copied!';
  modal.classList.remove('hidden')
  modal.classList.add('appear')
  setTimeout( () => {
    modal.textContent = ''
    modal.classList.add('hidden')
  }, 1500)
}

const downloadBuffer = () => {
  const buffer = document.getElementById('buffer')
  if (!buffer) { return }

  const completedText = buffer.innerHTML
  const cleanText = completedText.replace(/<\/?span[^>]*>/gi, '');
  const blob = new Blob([cleanText], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);

  const a = document.createElement('a');
  a.href = url;
  a.download = "CODE_OF_CONDUCT.MD";
  a.style.display = 'none';

  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

const readTemplate = async (url) => {
  const response = await fetch(url)
  if (!response.ok) {
    throw new Error(`Error retrieving ${url}: ${response.status}`)
  }
  return await response.text()
}
