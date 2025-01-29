import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import Header from '../Header';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import DatePicker from 'react-native-date-picker';

interface Option {
    label: string;
    value: string;
}

const options: Option[] = [
    { label: 'Spitting in Public Areas', value: 'Spitting in Public Areas' },
    { label: 'Open Defecation or Urination', value: 'Open Defecation or Urination' },
    { label: 'Littering in Public Spaces', value: 'Littering in Public Spaces' },
    { label: 'Illegal Dumping of Waste', value: 'Illegal Dumping of Waste' },
];

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        paddingBlock: width < 400 ? 20 : 10,
    },
    arrowContainer: {
        alignSelf: 'flex-start',
        marginBottom: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'left',
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
        textAlign: 'left',
        marginTop: 10,
    },
    input: {
        width: '100%',
        padding: 8,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        marginBottom: 10,
        textAlign: 'left',
        height: 40,
        justifyContent: 'center', // Center text vertically
    },
    inputWithIcon: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        marginBottom: 10,
        paddingHorizontal: 8,
        height: 40,
    },
    inputWithIconText: {
        flex: 1,
        height: '100%',
        paddingVertical: 0,
        color: 'black',
    },
    downArrow: {
        marginLeft: 'auto',
    },
    dropdown: {
        backgroundColor: '#fff',
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        marginTop: -10,
    },
    dropdownItem: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    addBtn: {
        paddingBlock: 10,
        backgroundColor: '#227CF5',
        width: '80%',
        borderRadius: 20,
        margin: 'auto',
    },
    addTxt: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: width < 400 ? 16 : 18,
        color: '#fff',
    },
});

const AddPenalty: React.FC = () => {
    const [vehicleNumber, setVehicleNumber] = useState('');
    const [vehicleOwner, setVehicleOwner] = useState('');
    const [violation, setViolation] = useState('');
    const [penaltyAmount, setPenaltyAmount] = useState('');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [date, setDate] = useState(new Date());
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const handleSubmit = () => {
        console.log({
            vehicleNumber,
            vehicleOwner,
            violation,
            penaltyAmount,
            dateOfViolation: date.toDateString(),
        });
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleOptionSelect = (option: string) => {
        setViolation(option);
        setIsDropdownOpen(false);
    };

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    return (
        <View style={styles.container}>
            <Header title='Add Penalty' />
            <View style={{ padding: 20 }}>
                <Text style={styles.label}>Vehicle Number</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter the vehicle number"
                    value={vehicleNumber}
                    onChangeText={setVehicleNumber}
                />
                <Text style={styles.label}>Vehicle Owner</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter the name"
                    value={vehicleOwner}
                    onChangeText={setVehicleOwner}
                />
                <Text style={styles.label}>Type of Violation</Text>
                <TouchableOpacity style={styles.inputWithIcon} onPress={toggleDropdown}>
                    <TextInput
                        style={styles.inputWithIconText}
                        placeholder="Choose type of violation"
                        value={violation}
                        editable={false}
                    />
                    <MaterialIcons name="arrow-drop-down" size={24} color="black" />
                </TouchableOpacity>
                {isDropdownOpen && (
                    <View style={styles.dropdown}>
                        {options.map((option) => (
                            <TouchableOpacity key={option.value} onPress={() => handleOptionSelect(option.value)}>
                                <Text style={styles.dropdownItem}>{option.label}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                )}
                <Text style={styles.label}>Penalty Amount</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter amount"
                    value={penaltyAmount}
                    onChangeText={setPenaltyAmount}
                    keyboardType="numeric"
                />
                <Text style={styles.label}>Date of Violation</Text>
                
            </View>
            <TouchableOpacity style={styles.addBtn} onPress={handleSubmit}>
                <Text style={styles.addTxt}>Add Penalty</Text>
            </TouchableOpacity>
        </View>

      );
    };



export default AddPenalty;