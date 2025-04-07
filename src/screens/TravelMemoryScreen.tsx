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

  const TravelMemoryScreen = () => {
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
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />
        
        <Image
          source={{
            uri: 'https://i.pinimg.com/736x/c8/94/e0/c894e0ab00f8386138b2d443b079ee6f.jpg',
          }}
          style={styles.backgroundImage}
          resizeMode="cover"
        />

        <View style={styles.overlay}>
          {/* Header */}
          <View style={styles.header}>
            <Text style={styles.headerTitle}>
              Travel Memories <Icon name="airplane-outline" size={26} color="#FFA725" />
            </Text>
            <Text style={styles.userName}>by Krishi Jain</Text>
          </View>

          {/* Memory Card */}
          <View style={styles.card}>
            <View style={styles.cardBody}>
              <View style={styles.locationRow}>
                <Icon name="location-sharp" size={20} color="#FFA725" />
                <Text style={styles.locationText}>Paris, France</Text>
              </View>

              <View style={styles.dateRow}>
                <Icon name="calendar-outline" size={18} color="#bbb" />
                <Text style={styles.dateText}>March 20, 2024</Text>
              </View>

              <Text style={styles.noteText}>
                Explored the Eiffel Tower at sunset. The golden light painting the city was absolutely breathtaking. One of the most magical moments of my trip!
              </Text>

              <View style={styles.actionButtons}>
                <TouchableOpacity
                  style={[styles.actionButton, isLiked && styles.likedButton]}
                  onPress={handleLikePress}
                  activeOpacity={0.8}
                >
                  <Icon
                    name={isLiked ? 'heart' : 'heart-outline'}
                    size={22}
                    color={isLiked ? '#ff6b6b' : '#ccc'}
                  />
                  <Text style={[styles.actionText, isLiked && styles.likedText]}>
                    {isLiked ? 'Liked' : 'Like'}
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.actionButton}
                  onPress={handleSharePress}
                  activeOpacity={0.8}
                >
                  <Icon name="share-outline" size={22} color="#ccc" />
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
    );
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    backgroundImage: {
      position: 'absolute',
      width: width,
      height: '100%',
    },
    overlay: {
      flex: 1,
      backgroundColor: 'rgba(10,10,10,0.1)',
      paddingHorizontal: 20,
      justifyContent: 'space-between',
    },
    header: {
      marginTop: 60,
    },
    headerTitle: {
      fontSize: 32,
      fontWeight: 'bold',
      color: '#fff',
      textShadowColor: '#000',
      textShadowOffset: { width: 1, height: 2 },
      textShadowRadius: 4,
    },
    userName: {
      fontSize: 16,
      color: '#ddd',
      marginTop: 4,
      fontStyle: 'italic',
    },
    card: {
      backgroundColor: 'rgba(0,0,0, 0.6)',
      borderRadius: 20,
      padding: 20,
      borderWidth: 2,
      borderColor: 'rgb(255,255,255)',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 6 },
      shadowOpacity: 0.4,
      shadowRadius: 10,

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
      color: '#FFA725',
      marginLeft: 8,
      textShadowColor: '#000',
      textShadowOffset: { width: 1, height: 1 },
      textShadowRadius: 3,
    },
    dateRow: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 12,
    },
    dateText: {
      fontSize: 14,
      color: '#ccc',
      marginLeft: 8,
    },
    noteText: {
      fontSize: 16,
      color: '#f3f3f3',
      lineHeight: 24,
      marginBottom: 20,
      fontStyle: 'italic',
      backgroundColor: 'rgba(255, 255, 255, 0.04)',
      padding: 12,
      borderRadius: 12,
      borderColor: 'rgb(255,255,255)',
      borderWidth: 1,
    },
    actionButtons: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      borderTopWidth: 1,
      borderTopColor: 'rgb(255,255,255)',
      paddingTop: 12,
    },
    actionButton: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 6,
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
      color: '#ddd',
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
      color: '#eee',
      fontStyle: 'italic',
      textShadowColor: '#000',
      textShadowOffset: { width: 1, height: 1 },
      textShadowRadius: 1,
    },
  });

  export default TravelMemoryScreen;
