$(function() {
  // カルーセル設定
  $('.carousel').slick({
    autoplay: true,
    dots: true,
    infinite: true,
    autoplaySpeed: 3000,
    arrows: false,
    fade: true,
    speed: 1000
  });

  // リンクにホバー効果を追加
  $('.a-hover').hover(
    function() {
      $(this).css("opacity", 0.5);
    },
    function() {
      $(this).css("opacity", 1);
    }
  );

  // TOPに戻るボタンの表示制御
  const backBtn = document.getElementById('back-btn');
  window.addEventListener('scroll', () => {
    const scrollValue = document.scrollingElement.scrollTop;
    if (scrollValue >= 300){
      backBtn.style.display = 'inline';
    } else {
      backBtn.style.display = 'none';
    }
  });
  
  // ボタンをクリックすると、上部に戻る
  backBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  // なめらかにスクロールさせる
  $('a[href^="#"]').on('click', function(event){
    event.preventDefault();

    var target = $($(this).attr('href'));

    if(target.length){
      $('html, body').stop().animate({
        scrollTop: target.offset().top
      }, 1000);
    }
  });

  // スクロール時に、特定のセクションにフェードインさせる
    $(window).on('scroll', function() {
      $('section').each(function() {
        var elementTop = $(this).offset().top;
        var windowTop = $(window).scrollTop();
        var windowHeight = $(window).height();
        
        if (windowTop + windowHeight > elementTop + 100) {
          $(this).addClass('in-view');
        }
    });
  });

    // モーダル表示の要素
    var modal = $('#modal');
    var modalImg = $('#modal-img');
    var captionText = $('#caption');
    
    // 画像クリックでモーダルを開く
    $('.modal-trigger').on('click', function() {
      modal.show(); // モーダルを表示
      modalImg.attr('src', $(this).attr('src')); // クリックされた画像をモーダルに表示
      captionText.text($(this).attr('alt')); // 画像のaltをキャプションとして表示
    });
    
    // モーダルを閉じる
    $('.close').on('click', function() {
      modal.hide(); // モーダルを非表示
    });
    
    // モーダルの背景をクリックして閉じる
    modal.on('click', function(event) {
      if ($(event.target).is(modal)) {
        modal.hide(); // モーダルを非表示
      }
    });
  });