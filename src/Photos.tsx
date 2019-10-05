import React from "react"
import { H3 } from 'baseui/typography' 
import { FlexColumn } from "./Flex/Containers";

export const Photos = (props: any) => {
  const { name } = props

  const importAll = r => {
    return r.keys().map(r);
  }

  const images = importAll(
    (require as any).context("./trey/", true, /\.(png|jpe?g|svg)$/)
  )

  const imageSize = '300px'

  return (
    <div style={{ display: "inline-flex", overflowX: "scroll", overflowY: "hidden", width: '100%' }}>
      {images.map((image, index) => (
        <FlexColumn>
        <img key={index} src={image} height={imageSize} width={imageSize} />
        <H3>{image.split('/static/media')[1].split('.jpg')[0].split('.')[0].split('/')[1]}</H3>
        </FlexColumn>
      ))}
    </div>
  )
}
