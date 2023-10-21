import './MainPage.css'

const MainPage = () => {

    const body_text = () => `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu ultrices vitae auctor eu augue ut lectus arcu bibendum. Mattis aliquam faucibus purus in massa. Sed egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium. Maecenas volutpat blandit aliquam etiam erat velit scelerisque in. Nisl condimentum id venenatis a condimentum vitae sapien. In fermentum et sollicitudin ac orci. Suspendisse interdum consectetur libero id faucibus nisl tincidunt. Pellentesque dignissim enim sit amet venenatis urna cursus eget nunc. Risus ultricies tristique nulla aliquet enim tortor at auctor. Aenean sed adipiscing diam donec adipiscing tristique.
    Quam id leo in vitae turpis massa sed elementum tempus. Purus faucibus ornare suspendisse sed nisi lacus. Auctor elit sed vulputate mi sit amet mauris. Id leo in vitae turpis massa sed. Mattis molestie a iaculis at erat pellentesque. Dictumst quisque sagittis purus sit amet volutpat. Quis hendrerit dolor magna eget est lorem. Sed turpis tincidunt id aliquet risus feugiat in. In dictum non consectetur a erat. Ut sem viverra aliquet eget. Mi sit amet mauris commodo quis imperdiet massa tincidunt nunc. Adipiscing commodo elit at imperdiet dui accumsan. Adipiscing diam donec adipiscing tristique risus nec feugiat.
    Elementum facilisis leo vel fringilla est ullamcorper eget nulla. Vitae tortor condimentum lacinia quis. Dictumst vestibulum rhoncus est pellentesque. Lorem dolor sed viverra ipsum nunc. Augue eget arcu dictum varius duis at. Et netus et malesuada fames. Porttitor leo a diam sollicitudin tempor id eu nisl. Sociis natoque penatibus et magnis dis. Sed id semper risus in. Volutpat est velit egestas dui id. Adipiscing bibendum est ultricies integer quis auctor elit sed vulputate. Facilisis gravida neque convallis a cras semper. Ornare aenean euismod elementum nisi quis eleifend quam adipiscing vitae. Lorem mollis aliquam ut porttitor leo a diam sollicitudin.
    Accumsan sit amet nulla facilisi morbi tempus iaculis urna id. Habitasse platea dictumst quisque sagittis purus sit. Aliquam id diam maecenas ultricies mi eget. Porttitor lacus luctus accumsan tortor posuere ac ut consequat. Convallis a cras semper auctor neque vitae tempus quam. Vitae aliquet nec ullamcorper sit amet. Tincidunt vitae semper quis lectus. Morbi tristique senectus et netus et malesuada fames ac turpis. Turpis egestas sed tempus urna et pharetra pharetra. Commodo odio aenean sed adipiscing diam. Turpis nunc eget lorem dolor sed. Duis at tellus at urna condimentum mattis. Tempus quam pellentesque nec nam aliquam sem et tortor. Ut tortor pretium viverra suspendisse potenti nullam ac tortor vitae. Venenatis tellus in metus vulputate eu scelerisque felis imperdiet. Suspendisse in est ante in nibh mauris cursus mattis. Proin sagittis nisl rhoncus mattis rhoncus urna neque viverra. Lorem dolor sed viverra ipsum nunc. Tellus rutrum tellus pellentesque eu tincidunt.
    Lacus laoreet non curabitur gravida arcu ac tortor dignissim convallis. Etiam non quam lacus suspendisse. Ut porttitor leo a diam sollicitudin tempor id eu nisl. Turpis egestas integer eget aliquet nibh praesent tristique magna sit. Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi tristique. Quam quisque id diam vel quam elementum pulvinar etiam. Consequat id porta nibh venenatis cras sed. Ut diam quam nulla porttitor massa id neque aliquam vestibulum. Placerat in egestas erat imperdiet. Faucibus pulvinar elementum integer enim neque. Imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada. Enim neque volutpat ac tincidunt vitae semper quis lectus. Diam vel quam elementum pulvinar etiam. Tempus imperdiet nulla malesuada pellentesque elit. Orci ac auctor augue mauris augue neque. Suspendisse ultrices gravida dictum fusce.`

    return (
        <>
            <div className="header">
                <hr />
                <p className="title">Главная страница</p>
                <hr />
            </div>
            <div className="body">
                <p>{body_text()}</p>
            </div>
        </>
    )
}

export default MainPage