const app = new Vue(
    {
        el: 'app',
        newTask: '',
        data: {
            tasks: [
                'Fare i compiti',
                'Fare la spesa',
                'Fare il bucato'
            ]
        },
        methods: {
            removeTask(i) {
                this.tasks.splice(i, 1)
            },
            addTask() {
                if (this.newTask != '' && this.newTask.length > 5) {
                    this.tasks.push(this.newTask)
                    this.error = false
                } else {
                    this.error = true
                }

                this.newTask = ''
            }

        }
    })