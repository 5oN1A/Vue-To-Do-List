//Vue.config.devtools = true;

const app = new Vue({
    el: "#root",
    data: {
        newTask: "",
        tasksList: ["dormire", "guardare fuori dalla finestra"],

    },

    methods: {

        fillTaskList() {
            
            //se stringa vuota: stop!
            if (this.newTask.trim() === "") {
                return;
            }

            //se l'elemento è già presente in taskList: stop!
             const existingTask = this.tasksList.some((element) => {
                return element.toLowerCase() === this.newTask.trim().toLowerCase();
            });

            if (existingTask) {
                return;
            } 

        
            this.tasksList.push(this.newTask);
            console.log(this.tasksList);

            this.newTask = "";
        },

        removeTask(i) {
            this.tasksList.splice(i, 1);
        }

       
    }

});