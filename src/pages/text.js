
define(() => {

class Text {
  constructor() {
    this._box = document.getElementById('text');
  }

  write(text) {
    this._box.textContent = text;
  }
}


return Text;

});
