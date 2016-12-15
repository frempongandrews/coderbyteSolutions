function talk () {
    console.log(this.sound);
}

var me = {

    sound: "Hello there from me!"
};

me.speak = talk.bind(me);
var anotherSpeak = me.speak;

anotherSpeak();

