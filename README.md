# 🌐 Roadwise

Welcome to **Roadwise**! A powerful tool for road route planning and optimization, built with cutting-edge technologies like GeoServer WMS, Dijkstra's algorithm, and the Haversine formula. Roadwise allows users to map out roads, mark restricted areas, and find the most efficient route between key points on a custom map. Upcoming features include AI and machine learning integration for automated point detection.

## 🚀 Features

- **Custom Map Upload**: Easily upload your own map to start planning your project.
- **Road Points Marking**: Mark where roads have already been built.
- **Restricted Areas**: Identify areas where road construction is not possible.
- **Optimal Route Calculation**: Automatically generate the best road route between key points.
- **Cost Estimation**: Get an estimated cost for the road based on the selected route.
- **AI Integration (Upcoming)**: Future versions will include machine learning algorithms to automatically detect road and restricted points.


## 🛠️ Technologies Used

- **Frontend**: React with Vite ⚛️
- **Backend**: Python Flask 🐍
- **Geospatial Services**: GeoServer WMS 🌍
- **Algorithms**:
  - **Dijkstra's Algorithm**: For finding the shortest path 🛤️
  - **Haversine Formula**: For distance calculation between points 📏


## 📸 Screenshots

![Roadwise Main Screen](path-to-your-screenshot.png)
*Main interface where users can upload maps and mark points.*

![Optimal Route](path-to-your-screenshot.png)
*Generated optimal route between marked points.*

## Demo Link
https://luxury-torte-bfcada.netlify.app/
To use the this link you still have to clone repository and run the backend.


## 🔧 Installation & Setup

1. **Clone the repository**:
    ```bash
    git clone https://github.com/your-username/roadwise.git
    cd roadwise
    ```

2. **Frontend Setup**:
    - Navigate to the `frontend` directory:
    ```bash
    cd RoadWise
    ```
    - Install dependencies and start the development server:
    ```bash
    npm install
    npm run dev
    ```

3. **Backend Setup**:
    - Start backend:
    ```bash
    python manage.py build
    
    ```

    - Run the Flask server:
    ```bash
    python app.py
    ```

4. **GeoServer Setup**:
    - Ensure GeoServer is installed and running.
    - Configure GeoServer to serve your uploaded maps.

## 📈 Usage

1. **Create a New Project**: Upload a custom map to start a new road project.
2. **Mark Points**:
    - **Road Points**: Indicate where roads have already been constructed.
    - **Restricted Points**: Mark areas where road construction is not feasible.
    - **Main Points**: Define the start and end points for the road to be constructed.
3. **Generate Route**: Submit the points, and Roadwise will calculate the optimal route along with the estimated cost.
4. **View Results**: Analyze the generated route and cost estimate.

## 📅 Upcoming Features

- **AI & Machine Learning**: Automate the detection of road and restricted points on the map.
- **Improved Cost Estimation**: More precise cost calculations based on additional factors.
- **User Authentication**: Secure user sessions and personalized project management.
- **Real-Time Collaboration**: Allow multiple users to collaborate on the same project.

## 🤝 Contributing

Contributions are welcome! Please fork the repository and submit a pull request.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

Distributed under the MIT License.

## 📧 Contact

Your Name - [Adnan Rizvi](mailto:rizviadnan72@gmail.com)

Project Link: [https://github.com/your-username/roadwise](https://github.com/your-username/roadwise)

---

