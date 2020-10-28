import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state:
        [
            {
                id: 0,
                content: "Архитектура",
                href: "#architecture",
                semicontent:
                    "Запроектированные большие окна, которые пропускают много солнечного света, наполнят Ваши квартиры теплотой и уютом текст тексттексттексттексттексттексттексттекст",
                active: true,
                src: "/images/arhi.jpg"
            },
            {
                id: 1,
                content: "Благоустройство",
                href: "#accomplishment",
                semicontent:
                    "Оригинальная архитктура жилого комплекса бизнес-класса «Первомайская» формирует современный стиль жизни qw wq 1 wd wd 2 3 4 666666666666 666666666666 666666666666 666666666666",
                active: false,
                src: "/images/blago.jpg"
            },
            {
                id: 2,
                content: "Безопастность",
                href: "#security",
                semicontent:
                    "Современный двор европейского уровня - територия для детей, игр на свежем воздуху и вечерних текст тексттексттексттексттексттексттексттекст",
                active: false,
                src: "/images/bezop.jpg"
            },
            {
                id: 3,
                content: "Инженерия",
                href: "#engineering",
                semicontent:
                    "Оригинальная архитктура жилого комплекса бизнес-класса «Первомайская» формирует современный стиль жизни qw wq w wd wd w w dwd",
                active: false,
                src: "/images/inch.jpg"
            },
            {
                id: 4,
                content: "Инфраструктура",
                href: "#infrastructure",
                semicontent:
                    "Прекрасный вариант для тех, кто предпочитает жить в спокойном районе среди интеллигенции, но при этом чувствовать ритм мегаполиса текст тексттексттексттексттексттексттексттекст",
                active: false,
                src: "/images/infa.jpg"
            },
            {
                id: 5,
                content: "Транспортная доступность",
                href: "#transport",
                semicontent:
                    "Жилой комплекс «Первомайска» расположен в престижном Академическом районе",
                active: false,
                src: "/images/transp.jpg"
            },
        ],
    getters: {
        GetIdByActive: state => {
            return state.find(todo => todo.active === true).id;
        },
        GetContentById: state => id => {
            return state.find(todo => todo.id === id).content;
        },
        GetHrefById: state => id => {
            return state.find(todo => todo.id === id).href;
        },
        GetSemicontentById: state => id => {
            return state.find(todo => todo.id === id).semicontent;
        },
        GetActiveById: state => id => {
            return state.find(todo => todo.id === id).active;
        },
        GetLength: state => {
            return state.length;
        },
    },
    mutations: {
        SET_NEW_ACTIV: (state, id) => {
            state.find(todo => todo.active === true).active = false;
            state.find(todo => todo.id === id).active = true;
        },
    },
    actions: {},
});