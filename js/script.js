Vue.config.devtools = true;

new Vue({
    el: "#root",
    data: {
        newTask: "",
        tasksList: [],

    },

    methods: {
        fillTaskList() {
            this.tasksList.push(this.newTask);

            }



    }

});