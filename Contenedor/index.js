class Contenedor {

    constructor() {
        this.items = [];
        this.id = 0
    }

    getAll = async () => {
        try{
            return items;
    } catch(error){
        console.log(error);
    }}

    getById = (id) => {
        const foundItem = this.items.find( i => i.id === parseInt(id));
        console.log(`Este es el articulo encontrado: ${foundItem}`);
        return foundItem
    }


    save = async (title, price, thumbnail) => {
        try {
            newItem = {
                title:title,
                price:price,
                thumbnail:thumbnail,
                id: id
            };
            this.items.push(newItem);
            return this.items
        } catch (error) {
            console.log(error)
        }
    }

    deleteById = async (id) => {
        try{   

            const newItemsFiltered = this.items.filter((i) => i.id !== id);
            console.log(`El item con id:${id} ha sido eliminado`);
            return newItemsFiltered;
        } catch(error) {
            console.log(error)
        }
    }
    
    updateItemById = async (title, price, thumbnail, id) => {
        try{
            const newItem = {
                title:title,
                price:price,
                thumbnail:thumbnail,
                id: id
            };
            const oldItemId = this.items.findIndex((prod) => prod.id == id);
            this.items[oldItemId] = newItem;
            return this.items;
        }catch(error){
            console.log(error)
        }
    }
}

module.exports = Contenedor;