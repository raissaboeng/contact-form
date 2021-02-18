const Form = {
    name: document.querySelector('input#name') ,
    phone: document.querySelector('input#phone'),
    email: document.querySelector('input#email'),
    message: document.querySelector('textarea#message'),
    
    getValues(){
        return {
            name: Form.name.value,
            phone: Form.phone.value,
            email: Form.email.value,
            message: Form.message.value
        }
    },

    validateFields(){
        Form.removeErrorFields()

        const {name, phone, email, message} = Form.getValues()

        if(name.trim() === "" || phone.trim() === "" || email.trim() === "" || message.trim() === ""){
            throw new Error("Campos vazios")
        }
    },

    addErrorFields(){
        document.querySelectorAll('small').forEach(item => item.classList.add('active'))
        document.querySelectorAll('label').forEach(item => item.classList.add('empty'))          
    },

    removeErrorFields(){
        document.querySelectorAll('small').forEach(item => item.classList.remove('active'))
        document.querySelectorAll('label').forEach(item => item.classList.remove('empty'))
    },

    clearFields(){
        Form.removeErrorFields()
        Form.name.value = ""
        Form.phone.value = ""
        Form.email.value = ""
        Form.message.value = ""
    },
        
    submit(event) {
        event.preventDefault()

        try{
            //verificar se todas as informações foram preenchidas
            Form.validateFields()
            //apagar os dados do formulario
            Form.clearFields()
            //Aviso de mensagem enviada
            alert("Mensagem enviada com sucesso!")
        }catch(error){
            Form.addErrorFields()
        }
    }

}