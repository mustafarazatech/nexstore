import sharp from "sharp";

const resizePhoto = async (inputBuffer) => {
  // console.log("Original:", inputBuffer.length);
  const metadata = await sharp(inputBuffer).metadata();
  const outputBuffer = await sharp(inputBuffer)
    .resize(metadata.width, metadata.height)
    .jpeg({ quality: 40 })
    .toBuffer();
  // console.log("Compressed:", outputBuffer.length);
  return {
    buffer: outputBuffer,
    imageType: "image/jpeg",
  };
};

export default resizePhoto;
