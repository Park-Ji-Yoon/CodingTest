let boy = {
  name: 'Mike',
  showName: function(){
    console.log(this.name);
  }
};

let man = boy;
man.name = 'Tom';
boy = null;
man.showName();