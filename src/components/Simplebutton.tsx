type ContainedProps = {
    variant : 'contained',

}

type OutlinedProps = {
    variant : 'outlined',
}
type ButtonProps = {
    type : ''
    size : 'sm' | 'md' | 'lg'
    borderRadius : string
} & ( ContainedProps| OutlinedProps)

type Person = {
    name : string
} & ({
    gender: 'male',
    salary: number
} | {
    gender: 'female',
    weight: number
})

export default function Simplebutton(props:Person) {

    if(props.gender === 'male'){
        console.log(props.salary)
    }
    else {

    }
  return (
    <div></div>
  )
}
