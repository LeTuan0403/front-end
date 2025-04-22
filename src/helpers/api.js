const axios = require('axios') 
const backEnd = 'http://localhost:1108/vocab/'

// Function to get all vocabulary items from the backend
export const ViewALLVocabs = async () => {
    try {
        const response = await axios.get(backEnd) // Send GET request to fetch all vocabs
        return response.data // Return the response data
    }
    catch (error) {
        // Log any errors that occur during the request
        console.error('Error fetching vocab list:', error)
    }
}

// Function to get a single vocab item by its ID
export const ViewVocabById = async(id) => {
    try {
        const response = await axios.get(backEnd + id) // Send GET request with vocab ID
        return response.data // Return the vocab data
    } catch (error) {
        // Log error if the request fails
        console.error('Error fetching vocab:', error)
    }
}

// Function to delete a vocab item by its ID
export const DeleteVocab = async(id) => {
    try {
        const response = await axios.delete(backEnd + id) // Send DELETE request to delete vocab by ID
        return response.data // Return the response from backend
    } catch (error) {
        // Log error if deletion fails
        console.error('Error delete vocab:', error)
    }
}

// Function to add a new vocab item to the database
export const AddNewVocab = async (word) => {
    try {
        const response = await axios.post(backEnd, word) // Send POST request with vocab data
        return response.data // Return the newly created vocab
    } catch (error) {
        // Log error if creation fails
        console.error('Error add new vocab:', error)
    }
}

// Function to update an existing vocab item by its ID
export const EditVocab = async (id, word) => {
    try {
        const response = await axios.put(backEnd + id, word) // Send PUT request with updated data
        return response.data // Return the updated vocab
    } catch (error) {
        // Log error if update fails
        console.error('Error edit vocab:', error)
    }
}
