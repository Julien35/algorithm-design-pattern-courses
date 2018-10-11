class FranceIoiTest {
	
import static algorea.Robot.*;

      public static void main(String[] args) {
         
        for (int loop1 = 1; loop1 <= 20; loop1 = loop1 + 1) {
           
          ramasser();
          for (int loop2 = 1; loop2 <= 15; loop2 = loop2 + 1) {
            droite();
          }
         deposer();
          
          for (int loop3 = 1; loop3 <= 15; loop3 = loop3 + 1) {
            gauche();
          }       
          
        }
        
      }

}
