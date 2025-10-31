import mumaker from 'mumaker';

async function testCommands() {
  console.log('🧪 Testing ephoto360 commands...\n');

  console.log('1️⃣  Testing PHUB command...');
  try {
    const phubResult = await mumaker.textpro("https://en.ephoto360.com/create-pornhub-style-logos-online-free-549.html", ['Cool', 'Text']);
    console.log('✅ PHUB Success! Image URL:', phubResult.image);
    console.log('📊 Image length:', phubResult.image.length, 'characters\n');
  } catch (error) {
    console.log('❌ PHUB Failed:', error.message, '\n');
  }

  console.log('2️⃣  Testing TATTOO command...');
  try {
    const tattooResult = await mumaker.textpro("https://en.ephoto360.com/make-tattoos-online-by-your-name-309.html", 'Eclipse');
    console.log('✅ TATTOO Success! Image URL:', tattooResult.image);
    console.log('📊 Image length:', tattooResult.image.length, 'characters\n');
  } catch (error) {
    console.log('❌ TATTOO Failed:', error.message, '\n');
  }

  console.log('3️⃣  Testing ARROWTATTOO command...');
  try {
    const arrowResult = await mumaker.textpro("https://en.ephoto360.com/arrow-tattoo-effect-with-signature-712.html", 'Eclipse');
    console.log('✅ ARROWTATTOO Success! Image URL:', arrowResult.image);
    console.log('📊 Image length:', arrowResult.image.length, 'characters\n');
  } catch (error) {
    console.log('❌ ARROWTATTOO Failed:', error.message, '\n');
  }

  console.log('✅ All tests completed!');
}

testCommands().catch(console.error);
