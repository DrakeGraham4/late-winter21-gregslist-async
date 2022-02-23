export class House{
    constructor({bedrooms, bathrooms, levels, imgUrl, year, price, description, id}) {
        this.id = id || '',
        this.bedrooms = bedrooms || ''
        this.bathrooms = bathrooms || ''
        this.levels = levels || 1
        this.imgUrl = imgUrl || ''
        this.year = year || 1900
        this.price = price || 0
        this.description = description || ''
    }

    get Template() {
        return `
        <div class="col-md-4">
        <div class="${this.year >= 2000 ? 'bg-dark text-light': 'bg-light text dark'} rounded shadow">
          <img class="object-fit-img rounded-top" src="${this.imgUrl}" alt="house image">
          <div class="p-3 clip-text">
            <p>Year: ${this.year} | Bedrooms: ${this.bedrooms} |${this.bathrooms}</p>
            <p></p>
            <p>${this.description}</p>
            <p>$${this.price}</p>
            <p>${this.levels}</p>
            <div class="text-end">
            ${this.price > 45 ? this.buttons : ''}
            <input type="checkbox" ${this.price>45?'checked': ''}/>
            </div>
          </div>
        </div>
      </div>
        `
    }

    get buttons() {
        
 return `<button class="btn btn-outline-warning" onclick="app.housesController.editHouse('${this.id}')"> Edit </button>
            <button class="btn ${this.bathrooms > 2 ? 'btn-outline-danger' : 'btn-danger'}" onclick="app.housesController.deleteHouse('${this.id}')" ${this.bathrooms > 2 ? 'disabled' : ''}> Delete </button>`
    }
}