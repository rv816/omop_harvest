# Configuring Python


- You can absolutely use the version of python installed on your OS if you are able to install packages. Sometimes, python is integrated with an OS, and therefore requires sudo to install packages because the package folder is in the root directory. 
- If you have "pip" and "virtualenv" in your system's python distribution, then it is easiest to simply continue with that distribution and not worry about downloading another.
- Alternatively, if you are able to install packages to a location that does not require sudo permission, this is also fine. Again, you just need "pip" and "virtualenv"


- If you are **not** able to install pacakges due to permissions, then install the following.

    - Go to http://continuum.io/downloads#all and download the version of anaconda python 2.7.8 for your operating system. 
    - Set up python
    - Add "export PATH='/path/to/anaconda/bin:$PATH" to your .bash_profile. You may need to similarly tell the system about a file called LD_LIBRARY..... 
    - Once "pip" and "virtualenv" are installed, follow the instructions below to install OMOP and Harvest.


# OMOP + Harvest


## About Harvest:

[Harvest][6] is a toolkit for building web applications that facilitates integrating, discovering, and reporting on data. It is developed and maintained by the [Center for Biomedical Informatics][7] (CBMi). It is nationally funded, designed for biomedical data _first_, open source and available on [GitHub][8], and it comes with an HTML5 web client.

For best performance, please use [Chrome][9], [Firefox][10] or [Safari][11].

## Install locally:

These instructions are intended for use with a PostgreSQL database.

### 1. Make a python virtualenv for the project (optional but highly recommended)

    virtualenv omop_harvest_env

### 2. Clone the project repository

    cd omop_harvest_env
    git clone https://github.com/rv816/omop_harvest.git

### 3. Install project requirements

    source bin/activate
    cd omop_harvest
    pip install -r requirements_grdr.txt

### 4. Load data into your database

- Contact chopteam@ for further db instructions. 

### 5. Configure local settings and connect Harvest to your database



In the root directory of the repository ("omop_harvest"), you will find ".project_config.json" file (use <code>ls -a</code> to reveal the file. For omop projects, this file is where you should change the user/password for the database once you are set up.
- Insert a unique secret key (can be generated at [http://www.miniwebtool.com/django-secret-key-generator/][14])



### 6. Check the Django models

Again, if you are using your own data or a non-PGSQL database, it is especially important that you check the Django models defined in `omop_harvest/models.py`. 
Specifically, check to be sure the `db_table` setting references a real table for each model and that each field references a real column on that table. Notice, however, that `ForeignKey` fields will be named with the `_id` at the end of the column name truncated. 


### 7. Configure your server settings

We run our apps using an nginx server that passes requests to uWSGI processes managed by supervisord and include server settings to that effect in the `server` directory. You should do whatever is most comfortable for you. 
If you don't want to bother with a production-type server environment right now, just do `python bin/manage.py runserver 5678` and then open your browser and navigate to `http://localhost:5678`.

[1]:    http://resrhtiuws06.research.chop.edu/omop/query/ "Query OMOP Harvest"
[2]:    http://resrhtiuws06.research.chop.edu/omop/register/ "Register for OMOP Harvest access"
[3]:    http://omop.org "OMOP"
[4]:    http://omop.org/CDM "OMOP CDM"
[5]:    http://omop.org/OSIM2 "OMOP OSIM2"
[6]:    http://harvest.research.chop.edu "Harvest Site"
[7]:    http://cbmi.research.chop.edu "CBMi Home"
[8]:    https://github.com/cbmi/harvest/ "Harvest GitHub"
[9]:    http://www.google.com/chrome "Chrome Browser"
[10]:   http://www.mozilla.org "Firefox Browser"
[11]:   http://www.apple.com/safari/ "Safari Browser"
[12]:   http://omop.org/Vocabularies "OMOP Vocabularies"
[13]:   http://omop.org/OSIM2 "OMOP OSIM2"
[14]:   http://www.miniwebtool.com/django-secret-key-generator/ "Secret Key Generator"
[15]:   https://docs.djangoproject.com/en/1.5/ref/settings/#databases "Django Database Settings"
