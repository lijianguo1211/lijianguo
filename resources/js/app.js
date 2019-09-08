/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

window.Vue = require('vue');

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i);
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default));

//Vue.component('example-component', require('./components/ExampleComponent.vue').default);

import footerComponent from './components/FooterComponent';
import exampleComponent from './components/ExampleComponent';
import reightComponent from './components/ReightComponent';
/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
    components:{
        footerComponent,
        exampleComponent,
        reightComponent
    }
});

require('./bootstrap');

import Holder from "holderjs";
window.Holder = Holder;

require('./home');

// import APlayer from "APlayer";
//
// window.APlayer = APlayer;
// const ap = new APlayer({
//     container: document.getElementById('player'),
//     mini: false,
//     autoplay: false,
//     theme: '#FADFA3',
//     loop: 'all',
//     order: 'random',
//     preload: 'auto',
//     volume: 0.7,
//     mutex: true,
//     listFolded: false,
//     listMaxHeight: 90,
//     lrcType: 3,
//     audio: [
//         {
//             name: 'name1',
//             artist: 'artist1',
//             url: 'url1.mp3',
//             cover: 'cover1.jpg',
//             lrc: 'lrc1.lrc',
//             theme: '#ebd0c2'
//         },
//         {
//             name: 'name2',
//             artist: 'artist2',
//             url: 'url2.mp3',
//             cover: 'cover2.jpg',
//             lrc: 'lrc2.lrc',
//             theme: '#46718b'
//         }
//     ]
// });
