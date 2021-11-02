const app = new Vue({
    el: '#app',
        newTask: '',
        data: {
            Tasks: [
                'Fare i compiti',
                'Fare la spesa',
                'Fare il bucato'
            ]
        },
        methods: {
            removeTask(i) {
                this.Tasks.splice(i, 1)
            },
            addTask() {
                if (this.newTask != '' && this.newTask.length > 5) {
                    this.Tasks.push(this.newTask)
                    this.error = false
                } else {
                    this.error = true
                }

                this.newTask = ''
            }

        }
    })