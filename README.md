# MyProfile

### Requirements
  - Apache Tomcat 9.0.16
  - Eclipse IDE 

### Installation and Configuration
Create war file
```
jar -cvf MyProfile.war <pathMyProfileFolder>
```
Move MyProfile.war in apache-tomcat-9.0.16/webapps

### Execution
Run Apache Tomcat Server
```
bin/startup.sh (linux) or bin/startup.bat (windows)
```
You can now test the webapp at 
```
http:\\localhost:8080\MyProfile

