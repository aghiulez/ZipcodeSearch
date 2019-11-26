const InputController: any = async (orango: any, zipcode:any) => {
    const InputModel:any = orango.model("Input");
    await InputModel.add({zipcode});
}

export{InputController};
//module.exports = InputController;