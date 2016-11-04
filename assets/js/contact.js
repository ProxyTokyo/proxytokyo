$(function() {
  $('[name="subject"]').on('change', function() {
    $('[name="_subject"]').val(this.value)
  })
})
