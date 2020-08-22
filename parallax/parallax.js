window.addEventListener('scroll', scrollFunc);

function scrollFunc() {
    var windowScroll = this.scrollY; 

    var $layer1 = document.getElementsByClassName('layer1')[0];
    $layer1.style.transform = 'translateY(' + windowScroll/12 + '%)';

    var $layer2 = document.getElementsByClassName('layer2')[0];
    $layer2.style.transform = 'translateY(' + windowScroll/15 + '%)';

    var $layer3 = document.getElementsByClassName('layer3')[0];
    $layer3.style.transform = 'translateY(' + windowScroll/18 + '%)';

    var $layer4 = document.getElementsByClassName('layer4')[0];
    $layer4.style.transform = 'translateY(' + windowScroll/23 + '%)';

    var $layer5 = document.getElementsByClassName('layer5')[0];
    $layer5.style.transform = 'translateY(' + windowScroll/40 + '%)';
}