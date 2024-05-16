<template>
  <div>
    <Header />
    <slot />
    <Footer />
  </div>
</template>

<script lang="ts" setup>
import $ from 'jquery';
import Header from '@/components/header.vue';
import Footer from '@/components/footer.vue';

onMounted(() => {
  // header click  navigation auto scroll to section
  $('.nav-link-text').on('click', function (e) {
    e.preventDefault();
    const target = $(this).attr('href').replace('/', '');
    console.log(target);
    if (target) {
      $('html, body').animate(
        {
          scrollTop: $(target).offset().top,
        },
        500,
      );
    }
  });

  // click watch-video-btn and show video modal
  $('.watch-video-btn').click(function () {
    // c-video-modal set opacity 1 and show display
    $('.c-video-modal').css('opacity', '1');
    $('.c-video-modal').css('display', 'block');
  });

  $('#closevid').click(function () {
    $('.c-video-modal').css('opacity', '0');
    $('.c-video-modal').css('display', 'none');
    StopEmbedVideo();
  });

  function StopEmbedVideo() {
    // var $frame = $('iframe#embedvideo');
    const $frame = $('iframe.embedly-embed');

    // saves the current iframe source
    const vidsrc = $frame.attr('src');

    // sets the source to nothing, stopping the video
    $frame.attr('src', '');

    // sets it back to the correct link so that it reloads immediately on the next window open
    $frame.attr('src', vidsrc);
  }

  // toggle menu mobile menu-button-2
  $('.menu-button-2').click(function () {
    console.log('click');
    $('.nav-menu-2').toggleClass('w--open');
    $('.w-nav-overlay').css('height', '100vh');
    $('.w-nav-overlay').css('display', 'block');
    $('.w-nav-overlay').css('width', '200px');
  });

  $(document).click(function (e) {
    // not nav-menu-2 and not menu-button-2
    if (!$(e.target).closest('.nav-menu-2').length && !$(e.target).closest('.menu-button-2').length) {
      $('.nav-menu-2').removeClass('w--open');
      $('.w-nav-overlay').css('height', '0');
      $('.w-nav-overlay').css('display', 'none');
      $('.w-nav-overlay').css('width', '0');
    }
  });
});
</script>
