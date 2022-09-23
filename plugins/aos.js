import AOS from 'aos';

export default ({ app }, inject) => {
    app.AOS = new AOS.init({
        delay: 200,
        easing: 'ease-in-out',
        duration: 1000
    });

}