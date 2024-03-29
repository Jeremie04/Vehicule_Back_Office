import { Route ,Routes } from 'react-router-dom';
import InsertMarque from './pages/InsertMarque';
import InsertCategorie from './pages/InsertCategorie';
// import Ensemble from './pages/Ensemble';
import InsertTypeCarburant from './pages/InsertTypeCarburant';
import InsertFonctionnalite from './pages/InsertFonctionnalite';
import InsertModele from './pages/InsertModele';
import InsertSousModele from './pages/InsertSousModele';
import InsertInteret from './pages/InsertInteret';
import InsertChoixFonctionnalite from './pages/InsertChoixFonctionnalite';
import Element from './pages/Element';
import ListeMarque from './pages/ListeMarque';
import ListeCategorie from './pages/ListeCAtegorie';
import ListeTypeCArburant from './pages/ListeTypeCArburant';
import ListeFonctionnaliteTechno from './pages/ListeFonctionnaliteTechno';
import ListeModele from './pages/ListeModele';
import ListeSousModele from './pages/ListeSousModele';
import ListeAnnonceNonValide from './pages/ListeAnnonceNonValide';
import Login from './pages/Login';
import Inscription from './pages/Inscription';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element= {<Login/>} />
        <Route path='/inscription' element= {<Inscription/>} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/inscription' element={<Inscription/>}/>
        <Route path='/element' element = {<Element/>} />
        <Route path='/insert-marque' element= {<InsertMarque/>}/>
        <Route path='/insert-categorie' element= {<InsertCategorie/>}/>
        <Route path='/insert-type' element= {<InsertTypeCarburant/>}/>
        <Route path='/insert-fonctionnalite' element={<InsertFonctionnalite/>}/>
        <Route path='/insert-modele' element={<InsertModele/>}/>
        <Route path='/insert-sousModele' element={<InsertSousModele/>}/>
        <Route path='/insert-interet' element={<InsertInteret/>}/>
        <Route path='/insert-ChoixFonctionnalite' element={<InsertChoixFonctionnalite/>}/>
        <Route path='/listeMarque' element={<ListeMarque/>}/>
        <Route path='/listeCategorie' element={<ListeCategorie/>}/>
        <Route path='/listeType' element={<ListeTypeCArburant/>}/>
        <Route path='/listeFonctionnalite' element={<ListeFonctionnaliteTechno/>}/>
        <Route path='/listeModele' element={<ListeModele/>}/>
        <Route path='/listeSousModele' element={<ListeSousModele/>}/>
        <Route path='/listeAnnonce' element={<ListeAnnonceNonValide/>}/> 
      </Routes>
    </>
  );
}

export default App;


