const app = new Vue ({

    el: '#app',

    data: {

        strBoolz: "",

        search: "",

        numberUser: 0,

        now:dayjs().format('DD/MM/YYYY HH:mm:ss'),

        ora:dayjs().format('HH:mm:ss'),

        user:{
            name: 'Nome Utente',
            avatar: '_io'
        },

        contacts: [
            {
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Hai portato a spasso il cane?',
                        status: 'sent',
                        open: false
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Ricordati di dargli da mangiare',
                        status: 'sent',
                        open: false
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        text: 'Tutto fatto!',
                        status: 'received',
                        open: false
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        text: 'Ciao come stai?',
                        status: 'sent',
                        open: false
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        text: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received',
                        open: false
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent',
                        open: false
                    }
                ],
            },
            {
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        text: 'La Marianna va in campagna',
                        status: 'received',
                        open: false
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        text: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent',
                        open: false
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        text: 'Ah scusa!',
                        status: 'received',
                        open: false
                    }
                ],
            },
            {
                name: 'Luisa',
                avatar: '_4',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent',
                        open: false
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Si, ma preferirei andare al cinema',
                        status: 'received',
                        open: false
                    }
                ],
            },
        ]

    },

    methods: {

        addStr(){

            this.contacts[this.numberUser].messages.push({
                date: this.now,
                text: this.strBoolz,
                status: 'sent',
                open: false
            })

            this.strBoolz = "";

            setTimeout(() => {
                this.contacts[this.numberUser].messages.push({
                    date: this.now,
                    text: 'ok',
                    status: 'received',
                    open: false
                })
            }, 1000)

        },
 
    },

    computed: {

        filtraLista(){
            return this.contacts.filter(element => {
                return element.name.toLowerCase().includes(this.search.toLowerCase())
            })
        }

    }

})