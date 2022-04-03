  const treatments = [
    {
      name: 'Brows',
      description: 'Lorem, ipsum dolor.',
      items: [
        {
          itemName: 'Brow Wax & Style',
          itemDescription: 'Description',
          price: 99,
          duration: '20min'
        }
      ]
    }
  ]

const item = treatments[0].items[0].price;

console.log(item)

// const Treatments = () => (
//   {treatments.map(treatment => (
//     <Treatment
//       name={treatment.name}
//       description={treatment.description}
//       items={treatment.items} 
//     /> 
//   ))}
// )

// const Treatment = ({ name, description, items }) => (
//   <div>
//     <h4>{name}</h4>
//     <div>{price}</div>
//   </div>
// )