import zipfile #fileVar_f0df594af717b55396d179bb5aef7f3d
import base64
from time import sleep
inputFile = input("Input file: ")
outputFile = input("Output file: ")
def getContent(file):
	fileVar_09377e0fe777fec1d42397bdc0efd8f2 = open(file, "rb")
	return fileVar_09377e0fe777fec1d42397bdc0efd8f2.read()
	fileVar_09377e0fe777fec1d42397bdc0efd8f2.close()
def writeTo(file, data):
	fileVar_f0df594af717b55396d179bb5aef7f3d = open(file, "wb")
	fileVar_f0df594af717b55396d179bb5aef7f3d.write(data)
	fileVar_f0df594af717b55396d179bb5aef7f3d.close()
writeTo(outputFile, base64.b64encode(getContent(inputFile)))