(() => {
  const display_sentence = document.querySelector('#display-sentence')

  const sentences = document.querySelectorAll('.sentence')
  const buttons = document.querySelectorAll('.record-button')
  const statuses = document.querySelectorAll('.status')
  const submit_button = document.querySelector('#submit')

  const STATUS_TYPES = {
    NOT_RECORDED: 'not recorded',
    RECORDING: 'recording',
    RECORDED: 'recorded'
  }

  const not_record_message = display_sentence.textContent

  for (const sentence of sentences) {
    const button = sentence.querySelector('.record-button')
    const status = sentence.querySelector('.status')
    button.addEventListener('click', () => {
      switch (status.textContent) {
        case STATUS_TYPES.NOT_RECORDED: {
          display_sentence.textContent = sentence.getAttribute('data-content')
          for (const b of buttons) b.disabled = true
          status.textContent = STATUS_TYPES.RECORDING
          button.disabled = false
          button.textContent = 'Stop recording'
          submit_button.disabled = true
          break
        }
        case STATUS_TYPES.RECORDING: {
          display_sentence.textContent = not_record_message
          for (const b of buttons) b.disabled = false
          status.textContent = STATUS_TYPES.RECORDED
          button.textContent = 'Discard'
          submit_button.disabled = false
          for (const s of statuses) {
            if (s.textContent != STATUS_TYPES.RECORDED) {
              submit_button.disabled = true
              break
            }
          }
          break
        }
        case STATUS_TYPES.RECORDED: {
          display_sentence.textContent = not_record_message
          status.textContent = STATUS_TYPES.NOT_RECORDED
          button.textContent = 'Record'
          submit_button.disabled = true
          break
        }
      }
    })
  }
})()
