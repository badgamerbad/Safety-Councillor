const config = require(`./config.json`);
if(config.enableDevMode){
    require(`./index.html`);
    require(`./index.css`);
}
class SlideShow {
    constructor() {
        this.imageNumber = 1;
        this.timer = null;
        this.interval();
        this.addEventListners();
    }
    setImage() {
        let moved = document.getElementsByClassName(`move-to-center`);
        moved[0].classList.add(`move-to-out`);
        moved[0].style.WebkitAnimationDuration = `${config.slideTime/2.5}ms`;
        moved[0].style.animationDuration = `${config.slideTime/2.5}ms`;
        moved[0].classList.remove(`move-to-center`);

        let imageElement = document.getElementsByClassName(`image-${this.imageNumber}`);
        imageElement[0].classList.add(`move-to-center`);
        imageElement[0].style.WebkitAnimationDuration = `${config.slideTime}ms`;
        imageElement[0].style.animationDuration = `${config.slideTime}ms`;
        imageElement[0].classList.remove(`move-to-out`);

        let slideNavBar = document.getElementsByClassName(`slide-nav-bar`);
        let slideNavButtons = slideNavBar[0].getElementsByTagName(`button`);
        let slideNavButtonsArray = Array.from(slideNavButtons);
        slideNavButtonsArray.map(element => {
            element.classList.remove(`active`);
        });
        let slideNavBarButton = document.getElementsByClassName(`slide-nav-bar-${this.imageNumber}`);
        slideNavBarButton[0].classList.add(`active`);
    }
    interval() {
        this.timer = setInterval( () => {
            this.imageNumber += 1;
            this.adjustImageCount();
            this.setImage();
        }, config.slideTime );
    }
    addEventListners() {
        let buttonElement = document.getElementsByClassName(`slide-button`);
        buttonElementArray = Array.from(buttonElement);
        buttonElementArray.map( (element) => {
            element.addEventListener(`click`, (e) => {
                clearInterval(this.timer);
                if(element.value == "inc")
                    this.imageNumber += 1;
                else
                    this.imageNumber -= 1;
                this.adjustImageCount();
                this.setImage();
                this.interval();
            });
        });

        let slideNavBar = document.getElementsByClassName(`slide-nav-bar`);
        let slideNavButtons = slideNavBar[0].getElementsByTagName(`button`);
        let slideNavButtonsArray = Array.from(slideNavButtons);
        slideNavButtonsArray.map( element => {
            element.addEventListener(`click`, (e) => {
                clearInterval(this.timer);
                this.imageNumber = parseInt(element.value);
                this.setImage();
                this.interval();
            } );
        } );
    }
    adjustImageCount() {
        let slideImagesElement = document.getElementsByClassName(`slide-image`);
        if( this.imageNumber > slideImagesElement.length )
            this.imageNumber = 1;
        else if ( this.imageNumber < 1 )
            this.imageNumber = 4;
    }
}

class menu {
    constructor() {
        this.addEventListners();
    }
    addEventListners() {
        let menuBarExpanded = document.getElementsByClassName(`menu-bar-expanded`);
        let li = menuBarExpanded[0].getElementsByTagName(`li`);
        let liArray = Array.from(li);
        liArray.map( element => {
            element.addEventListener(`click`, (e) => {
                let startY = this.currentYPosition();
                let stopY = this.elementYPosition(element.getElementsByTagName(`a`)[0].getAttribute(`value`));
                this.smoothScroll(startY, stopY);
            })
        });

        let menu = document.getElementsByClassName(`menu`);
        menu[0].addEventListener(`click`, (e) => {
            if(menu[0].classList.contains(`close`)){
                menu[0].classList.remove(`close`);
                menu[0].getElementsByTagName(`ul`)[0].classList.remove(`active`);
            }
            else{
                menu[0].classList.add(`close`);
                menu[0].getElementsByTagName(`ul`)[0].classList.add(`active`);
            }
        });

        let goTop = document.getElementsByClassName(`goTop`);
        goTop[0].addEventListener(`click`, (e) => {
            let startY = this.currentYPosition();
            let stopY = 0;
            this.smoothScroll(startY, stopY);
        });

        window.addEventListener(`scroll`, (e) => {
            let currentY = this.currentYPosition();
            currentY += self.innerHeight / 1.7;
            console.log(`${this.currentYPosition()} : ${currentY}`);
            let secondViewOffsetTop = this.elementYPosition(`service-section`);
            if( currentY > secondViewOffsetTop ) {
                goTop[0].classList.add(`active`);
                goTop[0].classList.remove(`inactive`);
            }
            else {
                goTop[0].classList.remove(`active`);
                goTop[0].classList.add(`inactive`);
            }
            liArray.filter( element => {
                element.classList.remove(`active`);
            });
            liArray.filter( element => {
                let anchorValue = element.getElementsByTagName(`a`)[0].getAttribute(`value`);
                let view = document.getElementsByClassName(anchorValue);
                let viewOffsetTop = this.elementYPosition(anchorValue);
                let viewOffsetBottom = viewOffsetTop + view[0].offsetHeight;
                if( currentY >= viewOffsetTop && currentY <= viewOffsetBottom ){
                    element.classList.add(`active`);
                }
            });
        });
    }
    currentYPosition() {
        if(self.pageYOffset) 
            return self.pageYOffset;
        if(document.documentElement && document.documentElement.scrollTop)
            return document.documentElement.scrollTop;
        if(document.body.scrollTop) 
            return document.body.scrollTop;
        return 0;
    }
    elementYPosition(elementName) {
        let element = document.getElementsByClassName(elementName);
        let y = element[0].offsetTop;
        let node = element;
        while (node[0].offsetParent && node[0].offsetParent != document.body) {
            node = [];
            node.push( element[0].offsetParent );
            y += node[0].offsetTop;
        } 
        y -= document.getElementsByClassName(`header`)[0].offsetHeight;
        return y;
    }
    smoothScroll(startY, stopY){
        let distance = stopY > startY ? stopY - startY : startY - stopY;
        if (distance < 100) {
            scrollTo(0, stopY); return;
        }
        let speed = Math.round( distance / 100 );
        if( speed >= 20 ) speed = 20;
        let step = Math.round( distance / 25 );
        var leapY = stopY > startY ? startY + step : startY - step;
        var timer = 0;
        if( stopY > startY ) {
            for ( let i = startY; i < stopY; i += step ) {
                setTimeout( `window.scrollTo(0, ${leapY})`, timer * speed );
                leapY += step;
                if (leapY > stopY)
                    leapY = stopY;
                timer++;
            }
            return;
        }
        else {
            for ( let i = startY; i > stopY; i -= step ) {
                setTimeout( `window.scrollTo(0, ${leapY})`, timer * speed );
                leapY -= step;
                if (leapY < stopY)
                    leapY = stopY;
                timer++;
            }
        }
        return false;
    }
}

new SlideShow();
new menu();