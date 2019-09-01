class Wheel {
  constructor(data) {
    this.data = data;
  }

  makeNewWheel() {
    let arr = []
    const pushMe = () => {
      let randomNum = Math.floor(Math.random() * 22);
      arr.length < 6 ? (arr.push(this.data[randomNum]) && pushMe()) : arr;
    };
    pushMe();
    return arr;
  }


}

export default Wheel