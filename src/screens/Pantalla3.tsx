import {Image, ScrollView, StatusBar, Text, View} from "react-native";

const PageDivider = ({title}: { title: string }) => {
    // @ts-ignore
    return <View style={styles.divider}>
        <Text style={styles.dividerText}>{title}</Text>
    </View>
}

interface ColorPortraitProps {
    title: string,
    pictureUrl: string,
    hexCode: string
}

const ColorPortrait = ({title, pictureUrl, hexCode}: ColorPortraitProps) => {
    return <View style={{width: '50%', padding: 10, backgroundColor: hexCode}}>
        <View style={{height: 100}}>
            <Image source={{uri: pictureUrl}} style={{width: '100%', height: '100%'}}/>
        </View>

        <Text>{title}</Text>
        <Text>{hexCode}</Text>
    </View>
}

const coloresAquosos = [
    {title: 'Azul', pictureUrl: 'https://static.vecteezy.com/system/resources/previews/006/431/453/non_2x/smiling-cloud-kawaii-character-blue-object-of-sky-free-vector.jpg', hexCode: '#0000FF'},
    {title: 'Verde', pictureUrl: 'https://media.istockphoto.com/id/619671108/photo/green-leaf-on-a-white-with-clipping-path.jpg?s=612x612&w=0&k=20&c=ggDAvg83pUTRBSl67OEzq9Dn6FEmvJEZpioJpyUAQY0=', hexCode: '#00FF00'},
    {title: 'Amarillo', pictureUrl: 'https://media.istockphoto.com/id/184624919/photo/chrysanthemum.jpg?s=612x612&w=0&k=20&c=p_pXjYw-kPJbEFAgcoaL3lgtBlUQTbrRSTpk2JMf6Gg=', hexCode: '#FFFF00'},
    {title: 'Cyan', pictureUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO3TJ5GAHpxB5LHNPQiMxB61cq_qzsebZX6rxzikLTGQ&s', hexCode: '#00FFFF'},
    {title: 'Magenta', pictureUrl: 'https://farm4.staticflickr.com/3033/5871816717_fbb6381fb7_o.jpg', hexCode: '#FF00FF'},
    {title: 'Blanco', pictureUrl: 'https://cdn.firstcry.com/education/2023/02/06203432/Plants-That-Are-White-Rose.jpg', hexCode: '#FFFFFF'},
]

const coloresNaturales = [
    {title: 'Rojo', pictureUrl: 'https://media.istockphoto.com/id/185262648/photo/red-apple-with-leaf-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=gUTvQuVPUxUYX1CEj-N3lW5eRFLlkGrU_cwwwOWxOh8=', hexCode: '#FF0000'},
    {title: 'Naranja', pictureUrl: 'https://as2.ftcdn.net/v2/jpg/00/99/43/05/1000_F_99430582_DyjKeGO0UY6nFik0rPi4rDVXsXk1ZvZd.jpg', hexCode: '#FFA500'},
    {title: 'Café', pictureUrl: 'https://cdn.pixabay.com/photo/2012/04/05/01/52/teddy-bear-25810_1280.png', hexCode: '#A52A2A'},
]

const otrosColores = [
    {title: 'Transparente', pictureUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Drinkware.jpg/640px-Drinkware.jpg', hexCode: '#FFFFFF00'},
    {title: 'Negro', pictureUrl: 'https://2.bp.blogspot.com/-p1DX88IPBqs/U9QbgZlep_I/AAAAAAAABNk/604ehg4lExA/s1600/HC1414.jpg_1.jpg', hexCode: '#000000'},
]

const Pantalla3 = () => {
    return <>
        <StatusBar/>
     <ScrollView style={{
         marginTop: 24,
         height: "100%",
         flex: 1

     }}>
         <PageDivider title="Colores Aquosos"/>
         {/*Wrap for tiles*/}
         <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
             {/*    Colores aquosos*/}
             {coloresAquosos.map((color, index) =>
                 <ColorPortrait key={index} title={color.title} pictureUrl={color.pictureUrl} hexCode={color.hexCode}/>
             )}
         </View>
         <PageDivider title="Colores Naturales"/>
         <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
             {/*    Colores naturales*/}
             {coloresNaturales.map((color, index) =>
                 <ColorPortrait key={index} title={color.title} pictureUrl={color.pictureUrl} hexCode={color.hexCode}/>
             )}
         </View>
         <PageDivider title="Otros Colores"/>
         <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
             {/*    Otros aquosos*/}
             {otrosColores.map((color, index) =>
                 <ColorPortrait key={index} title={color.title} pictureUrl={color.pictureUrl} hexCode={color.hexCode}/>
             )}
         </View>
     </ScrollView>

    </>
}

const styles = {
    divider: {
        height: '5%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'gray'
    },
    dividerText: {
        fontSize: 20,
        color: 'white'
    }
}


export default Pantalla3