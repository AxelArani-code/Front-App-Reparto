

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Download, 
  Shield, 
  Settings, 
  Smartphone, 
  CheckCircle, 
  AlertTriangle,
  Lock,
  FileDown
} from "lucide-react";

const APKInstallGuide = () => {
   const routerContact=()=>{
    const gmailLink =
      'https://wa.link/vp4sav';
    
    window.location.href = gmailLink;
  }
   const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/AquaReparto.apk'; // Ruta relativa desde public/
    link.setAttribute('download', 'AquaReparto.apk');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Guía de Instalación APK
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Instala AquaReparto en tu dispositivo Android siguiendo estos pasos sencillos y seguros
            </p>
          </div>

          {/* Security Warning */}
          <Card className="border-amber-200 bg-amber-50 dark:bg-amber-950/20 dark:border-amber-800 mb-8">
            <CardContent className="p-6">
              <div className="flex items-start space-x-3">
                <AlertTriangle className="w-6 h-6 text-amber-600 dark:text-amber-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-amber-800 dark:text-amber-200 mb-2">
                    Importante: Descarga Segura
                  </h3>
                  <p className="text-amber-700 dark:text-amber-300 text-sm">
                    Descarga la APK únicamente desde fuentes oficiales de AquaReparto. 
                    Verificar siempre la autenticidad del archivo para mantener la seguridad de tu dispositivo.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Installation Steps */}
          <div className="space-y-8">
            {/* Step 1: Download */}
            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                    1
                  </div>
                  <Download className="w-5 h-5 text-primary" />
                  <span>Descargar la APK de AquaReparto</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="pl-11">
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                      <span>Ingresa al sitio web oficial de AquaReparto</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                      <span>Busca la sección de "Descargas Móviles"</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                      <span>Selecciona la versión compatible con tu dispositivo Android</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                      <span>Descarga el archivo APK en tu dispositivo</span>
                    </li>
                  </ul>
                  <Button  onClick={handleDownload} className="mt-4" size="sm">
                    <FileDown className="w-4 h-4 mr-2" />
                    Descargar APK Oficial
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Step 2: Enable Unknown Sources */}
            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                    2
                  </div>
                  <Shield className="w-5 h-5 text-primary" />
                  <span>Habilitar Instalación de Fuentes Desconocidas</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="pl-11 space-y-4">
                  <p className="text-muted-foreground mb-4">
                    Antes de instalar la APK, debes habilitar la instalación desde fuentes desconocidas:
                  </p>
                  
                  <div className="bg-muted/50 rounded-lg p-4 space-y-3">
                    <div className="flex items-center space-x-3">
                      <Settings className="w-5 h-5 text-primary" />
                      <span className="font-medium">Método General (Android 8+)</span>
                    </div>
                    <ol className="list-decimal list-inside space-y-2 text-sm text-muted-foreground ml-8">
                      <li>Ve a <strong>Configuración</strong> de tu dispositivo</li>
                      <li>Busca <strong>"Seguridad y Privacidad"</strong> o <strong>"Seguridad"</strong></li>
                      <li>Encuentra <strong>"Instalar aplicaciones desconocidas"</strong></li>
                      <li>Selecciona el navegador desde donde descargaste la APK</li>
                      <li>Activa <strong>"Permitir de esta fuente"</strong></li>
                    </ol>
                  </div>

                  <div className="bg-muted/50 rounded-lg p-4 space-y-3">
                    <div className="flex items-center space-x-3">
                      <Smartphone className="w-5 h-5 text-primary" />
                      <span className="font-medium">Método Alternativo (Android 7 y anteriores)</span>
                    </div>
                    <ol className="list-decimal list-inside space-y-2 text-sm text-muted-foreground ml-8">
                      <li>Ve a <strong>Configuración</strong></li>
                      <li>Busca <strong>"Seguridad"</strong></li>
                      <li>Activa <strong>"Orígenes desconocidos"</strong></li>
                      <li>Confirma la acción cuando aparezca la advertencia</li>
                    </ol>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Step 3: Install */}
            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                    3
                  </div>
                  <Smartphone className="w-5 h-5 text-primary" />
                  <span>Instalar la Aplicación</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="pl-11">
                  <ol className="space-y-3 text-muted-foreground">
                    <li className="flex items-start space-x-2">
                      <span className="w-6 h-6 bg-primary/20 text-primary rounded-full flex items-center justify-center text-xs font-bold mt-0.5 flex-shrink-0">
                        a
                      </span>
                      <span>Abre el administrador de archivos de tu dispositivo</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="w-6 h-6 bg-primary/20 text-primary rounded-full flex items-center justify-center text-xs font-bold mt-0.5 flex-shrink-0">
                        b
                      </span>
                      <span>Navega a la carpeta <strong>"Descargas"</strong> o donde guardaste la APK</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="w-6 h-6 bg-primary/20 text-primary rounded-full flex items-center justify-center text-xs font-bold mt-0.5 flex-shrink-0">
                        c
                      </span>
                      <span>Toca el archivo <strong>"AquaReparto.apk"</strong></span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="w-6 h-6 bg-primary/20 text-primary rounded-full flex items-center justify-center text-xs font-bold mt-0.5 flex-shrink-0">
                        d
                      </span>
                      <span>Selecciona <strong>"Instalar"</strong> cuando aparezca la ventana</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="w-6 h-6 bg-primary/20 text-primary rounded-full flex items-center justify-center text-xs font-bold mt-0.5 flex-shrink-0">
                        e
                      </span>
                      <span>Concede los permisos necesarios que solicite la aplicación</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="w-6 h-6 bg-primary/20 text-primary rounded-full flex items-center justify-center text-xs font-bold mt-0.5 flex-shrink-0">
                        f
                      </span>
                      <span>Espera a que la instalación se complete</span>
                    </li>
                  </ol>
                </div>
              </CardContent>
            </Card>

            {/* Security Recommendations */}
            <Card className="border-green-200 bg-green-50 dark:bg-green-950/20 dark:border-green-800">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3 text-green-800 dark:text-green-200">
                  <Lock className="w-5 h-5" />
                  <span>Recomendaciones de Seguridad</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-green-700 dark:text-green-300">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400 mt-1 flex-shrink-0" />
                    <span>Después de la instalación, desactiva "Fuentes desconocidas" para mayor seguridad</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400 mt-1 flex-shrink-0" />
                    <span>Mantén tu dispositivo protegido con antivirus actualizado</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400 mt-1 flex-shrink-0" />
                    <span>Solo descarga actualizaciones desde fuentes oficiales de AquaReparto</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400 mt-1 flex-shrink-0" />
                    <span>Verifica siempre la autenticidad de los archivos APK antes de instalar</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Support Section */}
          <div className="text-center mt-12">
            <Card className="inline-block">
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-2">¿Necesitas ayuda?</h3>
                <p className="text-muted-foreground mb-4">
                  Si tienes problemas con la instalación, nuestro equipo de soporte está disponible 24/7
                </p>
                <Button onClick={routerContact}>
                  Contactar Soporte por WhatsApp
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default APKInstallGuide;