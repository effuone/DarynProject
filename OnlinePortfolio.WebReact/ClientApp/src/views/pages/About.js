import React from "react"
import { Card, CardBody } from "reactstrap"
import aboutImg from "../../assets/img/backgrounds/search-block.jpg"

class About extends React.Component{
  render(){
    return <Card>
      <CardBody className="p-3">
        <h1 className="pb-2">О проекте</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas commodo sapien accumsan, 
          maximus mi ut, faucibus est. Donec tempor orci eget massa vehicula, ac aliquet leo vulputate. 
          Nunc a imperdiet sapien. Nam interdum laoreet odio. Integer molestie orci vitae nulla accumsan 
          vestibulum. Donec tellus risus, pellentesque ac pretium quis, vehicula quis eros. Quisque odio
          nisi, pellentesque sed mauris id, venenatis laoreet quam. Sed viverra mattis eleifend. Nam 
          mattis, erat sed sagittis placerat, nulla est mattis risus, et auctor quam erat at turpis. 
          Sed ac semper velit. Nunc posuere mollis justo, nec efficitur ipsum.
          <br/><br/>
          Nam non pretium ipsum, vitae vehicula ipsum. Donec sollicitudin nec neque a posuere. 
          Morbi dictum consectetur fermentum. Suspendisse eleifend nunc nec quam facilisis 
          vulputate a non neque. Sed a tincidunt risus, a laoreet ipsum. Pellentesque ac metus 
          eget leo finibus dignissim eu ut purus. Suspendisse rutrum nisl lacus, sed cursus ipsum 
          maximus id. Morbi tristique pharetra nisi a imperdiet. Morbi lobortis lectus non ante 
          ullamcorper, non suscipit neque pretium. Donec turpis massa, egestas at arcu eu, tincidunt 
          tincidunt lacus. Donec laoreet blandit elit, eu fermentum massa ornare a. Nunc ut lorem ac 
          metus semper placerat.
          <br/><br/>
          Curabitur faucibus metus vel sapien ultricies faucibus. Maecenas sit amet venenatis arcu. 
          Quisque mauris dui, placerat quis lacus vitae, sodales vulputate lectus. Proin blandit turpis 
          eget neque porttitor imperdiet. Orci varius natoque penatibus et magnis dis parturient montes, 
          nascetur ridiculus mus. Morbi aliquet cursus tincidunt. Aliquam vel rutrum purus, ut feugiat nulla.
          <br/><br/>
          Phasellus vel iaculis massa. Ut consequat faucibus sem, ac cursus odio auctor ut. Maecenas ut 
          lacus sodales, sagittis ipsum sodales, imperdiet odio. Donec eget eros vel ante sollicitudin 
          efficitur sed non tortor. Sed ut faucibus neque, ut elementum lacus. Donec fermentum ante eu 
          nunc blandit consectetur. Aliquam faucibus scelerisque facilisis. Maecenas sed ipsum accumsan, 
          pulvinar purus id, pellentesque lectus. Vivamus imperdiet leo rutrum aliquam feugiat. Donec 
          congue lorem sit amet urna hendrerit ultricies. Etiam sed ipsum dictum, vestibulum nisl 
          imperdiet, hendrerit metus.
          <br/><br/>
          Nulla egestas malesuada ex at varius. Vestibulum eu mi convallis, dapibus leo vitae, porttitor 
          lectus. Donec auctor interdum mattis. Praesent facilisis ac velit non cursus. Duis pharetra 
          interdum pharetra. Etiam pharetra dolor tincidunt, feugiat velit vel, dictum ex. Aenean 
          pellentesque, dolor in luctus rutrum, purus nulla elementum mi, posuere auctor sapien tortor 
          id sapien. Curabitur suscipit justo urna, nec sagittis odio rhoncus quis. Fusce laoreet 
          dignissim sagittis. Vivamus quis maximus nulla.
          <br/><br/>
          Aenean consequat, tellus vel suscipit dictum, sapien dui vulputate velit, ultrices condimentum 
          augue nulla nec massa. Sed ac ligula risus. Etiam ultrices dictum egestas. Sed et odio non risus 
          pharetra dignissim. Nulla ut lorem porta quam gravida maximus. Sed sodales sollicitudin suscipit. 
          Pellentesque vel condimentum nulla, ac suscipit leo. Proin interdum accumsan risus, nec vehicula 
          nibh posuere at. Cras eu quam imperdiet, vehicula ex et, mattis urna. Duis in ornare nulla, id 
          tincidunt nisi. Nullam ut hendrerit mauris. Quisque sed euismod augue. Integer tincidunt est non 
          interdum imperdiet. Fusce blandit mollis elit, nec luctus dui varius vel. Aenean feugiat, est ut 
          suscipit pellentesque, erat magna vehicula purus, id consectetur ex turpis id mi.
          <br/><br/>
          Vivamus sollicitudin nibh ac risus cursus accumsan. Cras sodales dui vel iaculis condimentum. 
          Vivamus vitae ligula mattis, tempus tellus a, tincidunt nunc. Vivamus imperdiet vehicula turpis 
          ut scelerisque. Donec sit amet vulputate quam. Donec in erat malesuada libero posuere tristique 
          id commodo lacus. Phasellus tempus pulvinar orci ut elementum. Nunc in leo tempor, interdum mauris 
          at, iaculis turpis. Curabitur scelerisque quam vitae justo mollis, et convallis purus hendrerit. 
          Ut magna ex, mollis nec elit sed, ornare facilisis enim. Nunc elementum ac arcu tempus tincidunt. 
          Suspendisse rutrum, sapien sed dignissim imperdiet, velit nisl laoreet dolor, et feugiat nibh mi 
          ut justo. Aliquam malesuada id erat at fringilla. Integer tincidunt tortor vel metus blandit 
          tristique. Nam congue laoreet dui posuere dignissim.</p>
        <img className="w-100" src={aboutImg}/>
      </CardBody>
    </Card>
  }
}

export default About