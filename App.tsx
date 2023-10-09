import React from 'react';
import { View, Text, Image, Pressable, Alert, FlatList, StyleSheet } from 'react-native';
import shampooImage from './assets/foto_product.jpg';
import hidratanteImage from './assets/Hidratante_Capilar.jfif';
import protetorSolarImage from './assets/Protetor_solar.jpg';
import leiteImage from './assets/leite.png';
import bannerImage from './assets/banner.jpg'; 

interface Product {
  name: string;
  price: number;
  image: any;
}

const products: Product[] = [
  { name: 'Shampoo clear men', price: 20.0, image: shampooImage },
  { name: 'Hidratante', price: 20.0, image: hidratanteImage },
  { name: 'Leite Betania', price: 20.0, image: leiteImage },
  { name: 'Protetor', price: 20.0, image: protetorSolarImage }
];

const ProductItem: React.FC<Product> = ({ name, price, image }) => {
  const handleBuy = () => {
    alert('Compra efetuada');
  };

  return (
    <View style={styles.productContainer}>

      <Image source={image} style={styles.productImage} />
      <Text style={styles.productName}>{name}</Text>
      <Text style={styles.productPrice}>{`R$ ${price.toFixed(2)}`}</Text>
      <Pressable onPress={handleBuy}>
        {({ pressed }) => (
          <Text style={[styles.buyButton, { color: pressed ? 'blue' : 'black' }]}>Comprar</Text>
        )}
      </Pressable>
    </View>
  );
};

const App: React.FC = () => {
  return (
    <View style={styles.container}>
      <Image source={bannerImage} style={styles.bannerImage} />
      <FlatList
        data={products}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <ProductItem name={item.name} price={item.price} image={item.image} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  bannerImage: {
    width: '100%',
    height: 150, 
    marginBottom: 20, 
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  productContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    alignItems: 'center',
  },
  productImage: {
    width: 100,
    height: 100,
  },
  productName: {
    marginTop: 5,
    marginBottom: 5,
  },
  productPrice: {
    marginBottom: 10,
  },
  buyButton: {
    backgroundColor: 'green',
    padding: 3,
    borderRadius: 5,
    borderWidth: 2, 
    borderColor: 'darkgreen',
    alignItems: 'center',
  },
  buyButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default App;
