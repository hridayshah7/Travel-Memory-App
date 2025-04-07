import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import LinearGradient from 'react-native-linear-gradient';


const { width } = Dimensions.get('window');

const TravelMemory = () => {
  const [isLiked, setIsLiked] = useState(false);

  const handleLikePress = () => setIsLiked(!isLiked);

  const handleSharePress = () => {
    console.log({
      location: 'Paris, France',
      date: 'March 20, 2024',
      note: 'Explored the Eiffel Tower at sunset',
      liked: isLiked,
    });
  };

  return (
    <LinearGradient
    colors={['#2A004E', '#Ffffff']}
    start={{ x: 0.5, y: 0.9 }}
    end={{ x: 0.5, y: 0 }}
    style={styles.gradientBackground}
    >
        <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />
        
        <Image
            source={require('../assets/Effiel_tower.png')}
            style={styles.backgroundImage}
            resizeMode="cover"
            />


        <View style={styles.overlay}>
            {/* Header */}
            <View style={styles.header}>
            <Text style={styles.headerTitle}>
                Travel Memories 
            </Text>
            <Text style={styles.userName}>`~Hriday Shah</Text>
            </View>



            {/* Memory Card */}
            <View style={styles.card}>
            <View style={styles.cardBody}>
                <View style={styles.locationRow}>
                <Icon name="location-sharp" size={20} color="#2A004E" />
                <Text style={styles.locationText}>Paris, France</Text>
                </View>

                <View style={styles.dateRow}>
                <Icon name="calendar-outline" size={18} color="#000" />
                <Text style={styles.dateText}>March 20, 2024</Text>
                </View>

                <Text style={styles.noteText}>
                Explored the Eiffel Tower at sunset. The golden light painting the city was absolutely breathtaking!
                </Text>

                <View style={styles.actionButtons}>
                <TouchableOpacity
                style={styles.actionButton}
                onPress={handleLikePress}
                activeOpacity={0.8}
                >
                <Icon
                    name={isLiked ? 'heart' : 'heart-outline'}
                    size={22}
                    color={isLiked ? '#ff0000' : '#000'}
                />
                <Text style={styles.actionText}>
                    {isLiked ? 'Liked' : 'Like'}
                </Text>
                </TouchableOpacity>


                <TouchableOpacity
                    style={styles.actionButton}
                    onPress={handleSharePress}
                    activeOpacity={0.8}
                >
                    <Icon name="share-outline" size={22} color="#000" />
                    <Text style={styles.actionText}>Share</Text>
                </TouchableOpacity>
                </View>
            </View>
            </View>

            {/* Footer */}
            <View style={styles.footer}>
            <Text style={styles.footerText}> </Text>
            </View>
        </View>
        </SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradientBackground: {
    flex: 1,
  },   
  container: {
    flex: 1,
  },
  backgroundImage: {
    position: 'absolute',
    bottom: 0,
    width: width,
    height: '60%',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(10,10,10,0.1)',
    paddingHorizontal: 20,
    justifyContent: 'space-between',
  },
  header: {
    marginTop: 60,
    alignItems: 'center', // center align header title
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff', // was white
    textShadowColor: '#2A004E',
    textShadowOffset: { width: 1, height: 2 },
    textShadowRadius: 4,
  },
  userName: {
    fontSize: 16,
    color: '#000', // was purple, now black
    marginTop: 4,
    fontStyle: 'italic',
    alignSelf: 'flex-end', // shift to the right
    marginRight: 30,
  },
  card: {
    backgroundColor: 'rgba(0,0,0, 0.0)',
    borderRadius: 20,
    padding: 20,
    // borderWidth: 2,
    // borderColor: 'rgb(255,255,255)', // 🔥 Remove border
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.4,
    shadowRadius: 10,
    marginTop: -370, // 🔼 Shift card up
  },
  
  cardBody: {
    justifyContent: 'center',
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  locationText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2A004E', // purple color
    marginLeft: 8,
    textAlign: 'center',
  },
  dateRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  dateText: {
    fontSize: 14,
    color: '#000', // changed from grey to black
    marginLeft: 8,
  },
  noteText: {
    fontSize: 16,
    color: '#000', // changed from white to black
    lineHeight: 24,
    marginBottom: 20,
    fontStyle: 'italic',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    padding: 12,
    borderRadius: 12,
    borderColor: '#000',
    borderWidth: 1,
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    borderTopWidth: 1,
    borderTopColor: 'rgb(0,0,0)',
    paddingTop: 12,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 6,
    width: 100,
  },
  likedButton: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderWidth: 1,
    borderColor: 'rgb(255,255,255)',
    borderRadius: 8,
    paddingHorizontal: 10,
  },
  actionText: {
    marginLeft: 6,
    fontSize: 16,
    color: '#000', // changed from #ddd to black
  },
  likedText: {
    color: '#ff6b6b',
    fontWeight: 'bold',
  },
  footer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  footerText: {
    fontSize: 14,
    color: '#000', // changed from #eee to black
    fontStyle: 'italic',
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
  },
});

export default TravelMemory;
