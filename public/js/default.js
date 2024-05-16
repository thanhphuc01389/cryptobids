
// mounted here
$(document).ready(function () {
    var Webflow = Webflow || [];
    Webflow.push(function () {
        const $body = $(document.body);
        let scrollPosition = 0;

        $('[scroll="disable"]').on('click', function () {
            const oldWidth = $body.innerWidth();
            scrollPosition = window.pageYOffset;
            $body.css('overflow', 'hidden');
            $body.css('position', 'fixed');
            $body.css('top', `-${scrollPosition}px`);
            $body.width(oldWidth);
        });
        $('[scroll="enable"]').on('click', function () {
            if ($body.css('overflow') != 'hidden') {
                scrollPosition = window.pageYOffset;
            }
            $body.css('overflow', '');
            $body.css('position', '');
            $body.css('top', '');
            $body.width('');
            $(window).scrollTop(scrollPosition);
        });
    });

    // Pause Video in modal

    // From: https://discourse.webflow.com/t/stop-vimeo-video-with-another-button/55282
    $(document).ready(function () {
        $('#closevid').click(function () {
            StopEmbedVideo();
        });
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

    /**********************************
     Custom Vertical scrollbar
     **********************************/

        // Document elements
    const DOMWrapper = document.querySelector('.home-action-vertical-scroll-wrapper');
    const domEls = {
        // Sroll Elements
        scrollContent: DOMWrapper.querySelector('.home-action-vertical-scroll-content'),
        scollItems: Array.from(DOMWrapper.querySelectorAll('.home-auction-grid-item')),
        // Control buttons
        upButton: DOMWrapper.querySelector('.home-auction__scrollup'),
        downButton: DOMWrapper.querySelector('.home-auction__scrolldown'),
    };

    // Scrollbar controller variables
    const scrollItemsCount = domEls.scollItems.length;
    const scrollHeight = domEls.scrollContent.offsetHeight;
    const perScreen = 2;
    const moveAmountPerStep = scrollHeight / scrollItemsCount;
    const stopAtAmount = moveAmountPerStep * perScreen;
    let currentTrasitionValue = 0;

    // Scroll Step function
    const moveScrollPosition = function (container, direction = 'down') {
        let transitionValue;
        if (direction === 'down') {
            if (currentTrasitionValue <= -(scrollHeight - stopAtAmount)) return;
            currentTrasitionValue = currentTrasitionValue - moveAmountPerStep;
            transitionValue = `${currentTrasitionValue}px`;
        } else if (direction === 'up') {
            if (currentTrasitionValue >= 0) return;
            currentTrasitionValue = currentTrasitionValue + moveAmountPerStep;
            transitionValue = `${currentTrasitionValue}px`;
        }
        updateScrollControls();
        container.style.transform = `translateY(${transitionValue})`;
    };

    // Function to check if controls need to be hidden
    const updateScrollControls = function () {
        if (currentTrasitionValue <= -(scrollHeight - stopAtAmount)) {
            domEls.downButton.style.opacity = 0;
        } else {
            domEls.downButton.style.opacity = 1;
        }
        if (currentTrasitionValue >= 0) {
            domEls.upButton.style.opacity = 0;
        } else {
            domEls.upButton.style.opacity = 1;
        }
    };

    // Scroll Direction Functions
    const scrollUp = function () {
        moveScrollPosition(domEls.scrollContent, 'up');
    };
    const scrollDown = function () {
        moveScrollPosition(domEls.scrollContent, 'down');
    };

    // Add event listeners to up and down button controls
    domEls.upButton.addEventListener('click', scrollUp);
    domEls.downButton.addEventListener('click', scrollDown);
    // Check what scrolls should be shown on inital load
    updateScrollControls();
    /**********************************
     End custom Vertical scrollbar
     **********************************/
});