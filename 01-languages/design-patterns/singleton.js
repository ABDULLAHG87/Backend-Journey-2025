class ShoppingCart {
    constructor(){
        if (ShoppingCart.instance){
            return ShoppingCart.instance; // if the shopping
        }

        this.items = [];
        ShoppingCart.instance = this;
    }

    addItem(item){
        this.items.push(item);
    }

    getItems(){
        return [...this.items]
    }

    removeItem(item){
        //check if the item exist in the list
        const trimmedItem = item.trim();
        // if (!this.items.includes(trimmedItem)){
        //     console.log("Invalid Items specified");
        //     return;
        // }
        //Checking for index of the item
        const indexOfItem = this.items.indexOf(trimmedItem);
        if (indexOfItem === -1)
        {
            console.log(`Item ${item} not found in cart`)
        }
        this.items.splice(indexOfItem, 1); //Removes the item at the index specified 
    }

}

const cart1 = new ShoppingCart();
cart1.addItem('Phone');
console.log(cart1.getItems());
const cart2 = new ShoppingCart();
cart2.addItem('Bluetooth earpod')
console.log(cart1.getItems());
console.log(cart2.getItems());
cart1.removeItem('                 Phone              ');
console.log(cart1.getItems());