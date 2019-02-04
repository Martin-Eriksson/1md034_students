class MenuItem {
    constructor(name, kCal, hasGluten, hasLactose, image) {
        this.name = name;
        this.kCal = kCal;
        this.hasGluten = hasGluten;
        this.hasLactose = hasLactose;
        this.image = image;
    }
}

let m0 = new MenuItem("Hej0", 1000, false, false, "https://www.seriouseats.com/recipes/images/2015/07/20150728-homemade-whopper-food-lab-35-1500x1125.jpg");
let m1 = new MenuItem("Hej1", 1001, true, false, "https://www.seriouseats.com/recipes/images/2015/07/20150728-homemade-whopper-food-lab-35-1500x1125.jpg");
let m2 = new MenuItem("Hej2", 1002, false, true, "https://www.seriouseats.com/recipes/images/2015/07/20150728-homemade-whopper-food-lab-35-1500x1125.jpg");
let m3 = new MenuItem("Hej3", 1003, true, true, "https://www.seriouseats.com/recipes/images/2015/07/20150728-homemade-whopper-food-lab-35-1500x1125.jpg");
let m4 = new MenuItem("Hej4", 1004, true, false, "https://www.seriouseats.com/recipes/images/2015/07/20150728-homemade-whopper-food-lab-35-1500x1125.jpg");

let burgers = [m0, m1, m2, m3, m4];

let vm = new Vue({
    el: '#burger_menu',
    data: {
        burgers
    }
});