# MyProfile

### Requirements
  - Apache Tomcat 9.0.16
  - Eclipse IDE for Java EE Developers 

### Installation and Configuration
Download current repository 
```bash
git clone https://github.com/aLorenzo1/MyProfile.git
cd MyProfile
```

Import downloaded folder into eclipse 
```
Import --> Maven/Existing Maven Project
```

Build myprofile project using run as Maven install or using bash command
```bash
mvn clean install
```
Copy builded file into apache-tomcat-9.0.16/webapps
```bash
copy target/Libra.war {apache-tomcat_HOME}/webapps
```

### Execution
Run Apache Tomcat Server
```
{apache-tomcat_HOME}/bin/startup.sh (linux) or {apache-tomcat_HOME}/bin/startup.bat (windows)
```
You can now test the webapp at 
```
http:\\localhost:8080\myprofile

