function talk () {
    console.log(this.sound);
}

var me = {
    sound: "Hello there!"
};

//call the function talk using me as the context

talk.bind(me)();