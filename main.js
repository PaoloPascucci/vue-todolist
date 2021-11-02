const app = new Vue(
    {
        el: 'app',
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

        }
    })