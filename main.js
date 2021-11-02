const app = new Vue({
    el: '#app',

        data: {
            Tasks: [
                'Fare i compiti',
                'Fare la spesa',
                'Fare il bucato'
            ],
            newTask: '',
            error: false
        },
        methods: {
            removeTask(i) {
                this.Tasks.splice(i, 1)
            },
            addTasks() {
                if (this.newTask != '' && this.newTask.length > 5) {
                    this.Tasks.push(this.newTask);
                    this.error = false
                } else {
                    this.error = true;
                    this.newTask = ''
                }
            }

        }
    })