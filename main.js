Vue.component('task-list', {
    template: '<div><task v-for="task in tasks">{{ task.description }}</tasks></div>',

    data() {
        return {
            tasks: [
                { description: 'Go to the store', complete: true},
                { description: 'Go to the email', complete: true},
                { description: 'Go to the farm', complete: true},
                { description: 'Go to work', complete: true}
            ]
        };
    }
});

Vue.component('task', {
    template: '<li><slot></<slot></li>'
});

var app = new Vue({
    el: '#root'
});
