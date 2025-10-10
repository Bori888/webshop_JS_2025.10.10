import Kep from "./Kep";

export default function Kepek(props) {

    return (
        <>{
            props.lista.map((elem, index) => {
                return (
                    <Kep valt={elem} key={index} />
                )
            }



            )
        }
        </>)


}